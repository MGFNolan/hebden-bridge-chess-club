import { createClient } from "@supabase/supabase-js";
import type { Image } from "../utils/contentTypes";
import { type Database } from "./Database";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getGalleryImages() {
    const { data, error } = await supabase.from("hbcc-photos-table").select();

    if (error) {
        throw new Error(
            `ERROR: Databse returned an error when fetching gallery images: ${error.message}`
        );
    }

    const galleryImages: Image[] = data.map((image) => {
        return {
            id: image.id,
            img_alt: image.img_alt,
            img_url: image.img_url,
        };
    });

    return galleryImages;
}
