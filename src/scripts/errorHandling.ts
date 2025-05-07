export function handleImageError(event : Event) {
    const img = event.target as HTMLImageElement;
    
    img.src = "/images/404.webp";
    img.alt = "Image not found";
}