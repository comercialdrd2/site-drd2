import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export default function BreadcrumbNav({
  items,
  className = "",
  dark = false,
}: BreadcrumbNavProps) {
  const textColor = dark ? "text-slate-400" : "text-slate-500";
  const separatorColor = dark ? "text-slate-600" : "text-slate-300";
  const activeColor = dark ? "text-white" : "text-slate-900";
  const hoverColor = dark
    ? "hover:text-white"
    : "hover:text-red-600";
  const bg = dark
    ? "bg-slate-900 border-b border-slate-800"
    : "bg-slate-50 border-b border-slate-200";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 ${bg} ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <ol
          className={`flex items-center flex-wrap gap-1 text-xs font-bold uppercase tracking-widest ${textColor}`}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => (
            <li
              key={item.label}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${hoverColor}`}
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className={activeColor} itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              {index < items.length - 1 && (
                <span className={`${separatorColor} ml-1`} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
