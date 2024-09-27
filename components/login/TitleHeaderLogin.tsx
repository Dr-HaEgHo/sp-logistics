import React, { FC } from "react";

interface titleProps {
  title: string;
  subtitle?: string;
  link?: string;
  route?: string;
}

const TitleHeaderLogin: FC<titleProps> = ({ title, subtitle, link, route }) => {
  return (
    <div>
      {title && (
        <h2 className="text-[26px] mont lg:text-[40px] font-bold text-appBlack mb-6">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="font-[500] mont">
          {subtitle}{" "}
          {link && route && (
            <a href={route} className="text-primary hover:underline ">
                { link }
            </a>
          )}
        </p>
      )}
    </div>
  );
};

export default TitleHeaderLogin;
