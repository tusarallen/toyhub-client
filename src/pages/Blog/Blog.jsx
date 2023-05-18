import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto mt-8 md:mt-12 mb-8">
      <h2 className="font-bold text-3xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 rounded-box bg-gray-200 hover:bg-gray-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that grants authorization to a user,
            typically issued during authentication. It is used to authenticate
            API requests and should be stored securely on the client-side, such
            as in memory or a secure cookie. A refresh token is a long-lived
            credential issued alongside the access token. It allows obtaining a
            new access token without reauthentication. Refresh tokens should
            also be stored securely on the client-side.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 rounded-box bg-gray-200 hover:bg-gray-100"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL and NoSQL databases differ in terms of data model, schema
            flexibility, querying, scalability, and use cases. SQL databases
            follow a structured, tabular data model with predefined schemas,
            enforcing a rigid schema. They use SQL for querying and are
            vertically scalable. NoSQL databases offer flexible data models,
            allowing dynamic and evolving structures. They have schema
            flexibility, use various query languages, and are designed for
            horizontal scalability. NoSQL databases are often preferred for
            unstructured data, high scalability, and specific use cases like
            content management systems or real-time analytics.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 rounded-box bg-gray-200 hover:bg-gray-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a minimalistic and flexible web framework for Node.js.
            It provides a simple approach to building web applications and APIs.
            With its lightweight and unopinionated nature, Express.js gives
            developers more control over their application's architecture and
            design choices. It offers routing, middleware support, and utility
            features to handle HTTP requests and responses. Nest.js, on the
            other hand, is a progressive and extensible framework for building
            efficient server-side applications. Built on top of Express.js,
            Nest.js leverages TypeScript and decorators to provide a structured
            and scalable architecture. It emphasizes modularity, dependency
            injection, and strong typing, making it suitable for large-scale
            enterprise applications. Nest.js also integrates well with other
            libraries and frameworks, allowing developers to leverage their
            existing knowledge and tools.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 rounded-box bg-gray-200 hover:bg-gray-100"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            In MongoDB, the aggregate function is used for data aggregation and
            analysis. It allows for advanced data processing operations on
            document collections. The aggregate function works by applying a
            series of stages to the data, where each stage represents a specific
            operation or transformation. These stages can include filtering,
            grouping, sorting, projecting, and performing calculations. The
            aggregation pipeline processes the documents sequentially, passing
            the result of each stage to the next, allowing for complex data
            transformations and analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
