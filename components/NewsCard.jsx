import { formattedDate } from "@/helpers/formattedDate";
import { formattedTitles } from "@/helpers/formattedTitles";
import Link from "next/link";
import Image from "next/image";
import defaultNewImage from "../assets/images/defaultNewImage.png";

const NewsCard = ({ article }) => {
  return (
    <Link href={article?.url}>
      <article className="grid grid-cols-2 gap-8 p-4 border-b border-zinc-200">
        <div className="flex flex-col justify-between gap-2">
          <h4 className="text-sm font-medium text-zinc-700">
            {formattedTitles(article?.title)}
          </h4>
          <p className="text-xs text-zinc-700">
            {formattedDate(article?.publishedAt)}
          </p>
        </div>
        {article.urlToImage ? (
          <img
            src={article.urlToImage ? article.urlToImage : defaultNewImage}
            alt="article image"
            className="rounded"
          />
        ) : (
          <Image
            src={defaultNewImage}
            alt="default image"
            className="rounded h-fit"
          />
        )}
      </article>
    </Link>
  );
};

export default NewsCard;
