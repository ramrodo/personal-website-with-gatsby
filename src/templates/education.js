import React from "react"
import { graphql, Link } from "gatsby";
import EducationNav from "../components/education-nav";

export default (props) => {
  const education = props.data.educationJson;

  return (
    <div className="mx-8">
      <header className="py-12 border-purple-500 border-solid border-t-8">
      <div className="max-w-4xl mx-auto"></div>
        <Link to="/" className="uppercase underline text-pink-700 font-bold">Back to home</Link>
        <h2 className="capitalize text-6xl font-bold">{education.title}</h2>
        <p className="text-xl">{education.description}</p>
      </header>
      <ul>
        {
          education.items.map((course, index) => (
            <li className="bg-white shadow mt-4 flex" key={index}>
              <p className="vertical-text">{education.slug}</p>
              <div className="flex items-center flex-1 p-8">
                <div className="flex-1">
                  <h3>{course.name}</h3>
                  {
                    course.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{course.degree}</span>
                  }
                  {
                    course.url && <a href={course.url} className="btn mt-4 inline-block" target="_blank" rel="noopener noreferrer">See more</a>
                  }
                </div>
                <div className="inline-block">
                  <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{course.score}</span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <EducationNav />
    </div>
  );
}

export const query = graphql`
  query($slug : String){
    educationJson(slug:{ eq: $slug }){
      slug
      title
      description
      items {
        name
        url
        degree
        score
      }
    }
  }
`;
