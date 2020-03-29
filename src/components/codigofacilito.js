import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Post from "./post";

export default () => {
  const data = useStaticQuery(graphql`{
    codigofacilitoJson {
      id
      data {
        username
        email
        courses {
          title
          progress
          url
        }
      }
    }
  }`);

  return (
    <section className="max-w-4xl mx-auto overflow-x-scroll mb-24">
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Post data={data.codigofacilitoJson.data.courses} title="My courses in CódigoFacilito" />
        </div>
      </div>
    </section>
  );
};