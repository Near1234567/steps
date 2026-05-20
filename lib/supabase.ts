import { supabase } from '../../lib/supabase';
import { Artwork, SiteData } from '../../types';

const checkSupabase = () => {
  if (!supabase) {
    throw new Error(
      'Supabase non configuré. Vérifiez les variables VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.'
    );
  }
};

export const dataService = {

  // --------------------------------------------
  // SETTINGS
  // --------------------------------------------
  async getSettings(): Promise<Partial<SiteData> | null> {

    try {
      checkSupabase();

      const { data, error } = await supabase!
        .from('site_configs')
        .select('payload')
        .eq('id', 'primary_config')
        .single();

      if (error) {
        console.error('Error fetching settings:', error);
        return null;
      }

      return data?.payload || null;

    } catch (err) {
      console.error(err);
      return null;
    }
  },

  async updateSettings(payload: Partial<SiteData>) {

    checkSupabase();

    const { error } = await supabase!
      .from('site_configs')
      .upsert({
        id: 'primary_config',
        payload,
        updated_at: new Date().toISOString(),
        status: 'active'
      });

    if (error) {
      console.error('Supabase updateSettings Error:', error);

      if (error.code === '42P01') {
        throw new Error(
          "Table 'site_configs' introuvable."
        );
      }

      throw error;
    }
  },

  // --------------------------------------------
  // ARTWORKS
  // --------------------------------------------
  async getArtworks(): Promise<Artwork[]> {

    try {
      checkSupabase();

      const { data, error } = await supabase!
        .from('artworks')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching artworks:', error);
        return [];
      }

      return (data || []).map(item => ({
        id: item.id,
        title: item.title,
        year: item.year,
        category: item.category,
        imageUrl: item.image_url,
        description: item.description,
        price: item.price,
        dimensions: item.dimensions,
        availability: item.availability,
        status: item.status || 'disponible'
      }));

    } catch (err) {
      console.error(err);
      return [];
    }
  },

  async syncArtworks(artworks: Artwork[]) {

    checkSupabase();

    console.log(`Syncing ${artworks.length} artworks...`);

    // DELETE ALL
    const { error: deleteError } = await supabase!
      .from('artworks')
      .delete()
      .gte('id', 0);

    if (deleteError) {
      console.error(deleteError);
      throw deleteError;
    }

    // PREPARE INSERTS
    const inserts = artworks.map((art, index) => ({
      title: art.title || 'Sans titre',
      year: art.year || '',
      category: art.category || 'Autre',
      image_url: art.imageUrl || '',
      description: art.description || '',
      price: art.price || '',
      dimensions: art.dimensions || '',
      availability: art.availability || '',
      status: art.status || 'disponible',
      display_order: index
    }));

    // INSERT
    if (inserts.length > 0) {

      const { error: insertError } = await supabase!
        .from('artworks')
        .insert(inserts);

      if (insertError) {

        console.error(insertError);

        if (
          insertError.message?.includes('too large')
        ) {
          throw new Error(
            'Payload trop grand. Réduisez les images.'
          );
        }

        throw insertError;
      }
    }

    console.log('✅ Artworks sync success');
  }
};
