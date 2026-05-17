import { useQuery } from "@tanstack/react-query";
import { getGalleryImages } from "../api/api";

export default function useQueryGalleryImages() {
    const {
        data: galleryImages,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["hbcc-photos-table"],
        queryFn: getGalleryImages,
    });

    return {
        galleryImages,
        error,
        isLoading,
    };
}
