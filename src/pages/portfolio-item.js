import React from 'react'
// import Header from '../components/header'
// import Layout from '../components/layout'

export default function About() {
	return (
		<>
			<Header />
			<section class="intro">
				<h1 class="section__title section__title--intro">
					The title <strong>of my project</strong>
				</h1>
				<p class="section__subtitle section__subtitle--intro">
					A short subtitle
				</p>
				<img alt="" class="intro__img" />
			</section>

			<div class="portfolio-item-individual">
				<p>
					Voluptatibus, soluta blanditiis! Incidunt ea unde itaque
					illo molestiae eligendi sint culpa nobis voluptas sapiente
					voluptate, magnam ipsum eius earum?
				</p>
				<img alt="" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Saepe et amet tenetur! Fugit sequi optio corrupti fugiat
					ducimus consequatur incidunt?
				</p>
				<p>
					Voluptatibus, soluta blanditiis! Incidunt ea unde itaque
					illo molestiae eligendi sint culpa nobis voluptas sapiente
					voluptate, magnam ipsum eius earum?
				</p>
			</div>
			<Footer />
		</>
	)
}
