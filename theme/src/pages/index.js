import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  return (
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <Img src={data.image.childImageSharp.fluid} alt="" />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    image: file(name: { eq: "illustration" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
