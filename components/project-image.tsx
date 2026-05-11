type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  return (
    <figure className="project-image fade-in">
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
