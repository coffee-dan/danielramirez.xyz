// Template for portfolio pages, to be hydrated by graphql queries to the
// markdown files located in /pages
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
	const post = data.portfolioWriteup
	const image = data.portfolioImage

	return (
		<>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<Header />

			<section className="intro">
				<h1 className="section__title section__title--intro">
					<strong>{post.frontmatter.title}</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					{post.frontmatter.subtitle}
				</p>
				<Img
					title={post.frontmatter.title}
					alt="Portfolio featured image"
					className="intro__img"
					fluid={image.childImageSharp.fluid}
				/>
			</section>

			<div className="portfolio-item-individual">
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</div>

			<Footer />
		</>
	)
}

export const query = graphql`
	query($slug: String!) {
		# Load in portfolio writeup using slug Example: /netflix-zero/
		portfolioWriteup: markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				subtitle
				featuredImage
			}
		}
		# Load in portfolio image using slug
		portfolioImage: file(
			relativePath: { regex: $slug }
			extension: { regex: "/(gif|jpe?g|png|webp)$/i" }
		) {
			childImageSharp {
				fluid(maxWidth: 1280) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
