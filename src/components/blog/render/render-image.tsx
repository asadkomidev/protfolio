import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";

function urlFor(source: any) {
  return urlForImage(source);
}

interface ImageProps {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

const ImageBlock: React.FC<ImageProps> = ({ value }) => {
  const { asset, alt } = value;

  if (!asset) {
    return null;
  }

  const imageUrl = urlFor(asset);

  return (
    <Image
      priority
      src={imageUrl}
      alt={alt || " "}
      width={800}
      height={500}
      className="object-cover aspect-video rounded-lg"
    />
  );
};

export default ImageBlock;
