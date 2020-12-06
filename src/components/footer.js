import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
	return (
		<div className="footer">
			<ul className="social-list">
				<li className="social-list__item">
					<a
						className="social-list__link"
						alt="Github"
						href="https://github.com/coffee-dan"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
				<li className="social-list__item">
					<a
						className="social-list__link"
						alt="LinkedIn"
						href="https://www.linkedin.com/in/daniel-ramirez-b96b7b186/"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
			</ul>
		</div>
	)
}
