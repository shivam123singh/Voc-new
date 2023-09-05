"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const AppBreadComb = () => {
  const pathname = usePathname();
  const pathnames = pathname.slice(1).split("/");

  const isLast = (index) => {
    return index === pathnames.length - 1;
  };

  if (pathnames.length <= 1) return null;

  return (
    <ol className="flex items-center">
      {pathnames.map((name, index) => {
        const activeLink = isLast(index);
        const updatedName = name.split("-").join(" ");

        return (
          <div className="flex items-center text-sm mb-8" key={name}>
            {activeLink ? (
              <>
                <li className="capitalize">{updatedName}</li>
              </>
            ) : (
              <li className="flex items-center">
                <Link
                  href={`/${name}`}
                  className="text-link capitalize text-grey-300"
                >
                  {updatedName}
                </Link>

                <ChevronRight size={16} color="#211F32BF" className="mx-2" />
              </li>
            )}
          </div>
        );
      })}
    </ol>
  );
};

export default AppBreadComb;
