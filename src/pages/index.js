import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function Home({ data }) {
	return (
		<body>
			<SEO title="Home" />
			<Header />

			{/* Introduction section */}
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					<strong>Daniel Gerard Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					Software Developer
				</p>
				<Img
					title="Daniel Gerard Ramirez"
					alt="Me"
					className="intro__img"
					sizes={data.file.childImageSharp.sizes}
				/>
			</section>

			{/* About Me */}
			<section className="about-me" id="about">
				<div className="about-me__body">
					<p>Education - Bachelor of Computer Science</p>
					<a href="github.com/coffee-dan" className="about-me__cv">
						CV
					</a>
				</div>
			</section>

			{/* My Work */}
			<section className="my-work" id="work">
				<h2 className="section__title section__title--work">
					<strong>My Work</strong>
				</h2>

				<div className="portfolio">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<a
							key={node.id}
							href={node.fields.slug}
							className="portfolio__item"
						>
							<img
								src={node.frontmatter.featuredImage}
								alt=""
								className="portfolio__img"
							/>
						</a>
					))}
				</div>
			</section>

			<Footer />
		</body>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						featuredImage
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
		file(relativePath: { eq: "me-1.jpg" }) {
			childImageSharp {
				sizes(maxWidth: 1280) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`
