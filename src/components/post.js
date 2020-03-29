import React, { Fragment } from "react"

export default (props) => (
  <Fragment>
    <h2 className="text-3xl font-bold text-center">{props.title}</h2>
    <div className="flex mt-8">
      {
        props.data.map((course) => (
          <div key={course.title} className="shadow p-4 bg-white mr-4 rounded flex-shrink-0" style={{ width: "200px" }}>
            <h4 className="font-bold h-20 overflow-y-hidden">
              <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
            </h4>
            <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2">Progress: {parseInt(course.progress)}%</span>
          </div>
        ))
      }
    </div>
  </Fragment>
);
