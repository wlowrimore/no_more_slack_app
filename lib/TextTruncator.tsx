import Link from "next/link";

interface TextTruncatorProps {
  text: string;
  wordLimit: number;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function TextTruncator({
  text = " ",
  wordLimit = 0,
  linkText = "",
  linkHref = "",
  className = "",
}: TextTruncatorProps) {
  const truncateText = (text: string, limit: number) => {
    const words = text.trim().split(/\s+/);

    if (words.length <= limit) {
      return { truncatedText: text, wasTruncated: false };
    }

    const truncatedWords = words.slice(0, limit);
    return {
      truncatedText: truncatedWords.join(" "),
      wasTruncated: true,
    };
  };

  const { truncatedText, wasTruncated } = truncateText(text, wordLimit);

  return (
    <article className="max-w-2xl max-h-[8rem] pt-3">
      <span className={className}>{truncatedText}</span>
      {wasTruncated && (
        <Link
          href={linkHref}
          className="text-sky-600 hover:text-red-600 hover:underline ml-1 transition-colors duration-200"
        >
          {linkText}
        </Link>
      )}
    </article>
  );
}
