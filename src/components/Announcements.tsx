import { AnnouncementsDataProps } from "../data/announcements";
import messageIcon from "../assets/messageIcon.svg";
import moreIcon from "../assets/moreIcon.svg";
import { useState } from "react";
const AnnouncementRow = ({ date, title, body }: AnnouncementsDataProps) => {
  return (
    <li className="flex items-center justify-between gap-2 px-4 py-3 border-t border-gray-200">
      <article className="flex items-center justify-between gap-3">
        <p className="text-sm text-gray-200">{date}</p>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-sm font-medium">{body}</p>
        </div>
      </article>
      <img src={messageIcon} alt="message" />
    </li>
  );
};

interface AnnouncementsInterface {
  data: AnnouncementsDataProps[];
}

const Announcements = ({ data }: AnnouncementsInterface) => {
  const total = data.length;
  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const end = page * perPage;

  const nextPage = () => {
    let next = page + 1;
    if (page === totalPages) {
      next = page;
    }
    setPage(next);
  };
  const prevPage = () => {
    let prev = page - 1;
    if (page === 1) {
      prev = 1;
    }
    setPage(prev);
  };

  return (
    <section className="bg-white rounded-lg py-4">
      <div className="px-4 flex items-center justify-between mb-4">
        <h2 className="font-bold">Announcements</h2>
        <div className="flex items-center justify-between w-full basis-1/2">
          <input
            placeholder="search"
            className="border rounded-lg border-gray-200 w-full px-2 py-1 flex-"
          />
          <img
            role="button"
            src={moreIcon}
            alt="more"
            className="cursor-pointer"
          />
        </div>
      </div>
      <ul>
        {data
          .slice(start, end)
          .map((item: AnnouncementsDataProps, index: number) => {
            return <AnnouncementRow key={index} {...item} />;
          })}
      </ul>
      <article className="border-t border-gray-200 px-4 pt-3 flex items-start justify-between">
        <p className="text-sm text-gray-200">
          Showing {start + 1} to {end <= total ? end : total} of {total}{" "}
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={prevPage}
            className="w-[26px] h-6 rounded-[4px] bg-black-200 text-white shadow"
          >
            {"<"}
          </button>
          <button
            onClick={nextPage}
            className="w-[26px] h-6 rounded-[4px] bg-black-200 text-white shadow "
            title="next"
          >
            {">"}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Announcements;
