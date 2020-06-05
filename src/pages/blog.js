import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Articles" />
    </section>
  </Layout>
}



export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "Do MMMM YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
