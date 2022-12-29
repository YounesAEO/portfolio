import { ReactComponent as MotivationTech } from '../assets/interest_in_tech.svg';
import { ReactComponent as MotivationBiz } from '../assets/business_acumen.svg';
import { ReactComponent as MotivationTeamworking } from '../assets/teamworking.svg';
import { ReactComponent as MotivationWinner } from '../assets/winner.svg';
import { ReactComponent as MotivatinCurious } from '../assets/curious_child.svg';

export const REASONS = [
	{
		title: 'Interest in technology',
		content: `Since I was a child I loved sovling riddles. I also
        loved inventing games that I played along with my
        friends. <strong>Overall, I just loved tinkering.</strong> <br />
        Today, I like to call myself a technology tinkerer.
        Technology lets me build stuff without any limits but
        <strong>it's also a reality check to my capabilities and skills.</strong>
        <br />
        Throughout the years I've spent learning and working
        with technology <strong>I've developed the ability to solve
        complex algorithmic, design, and business problems.</strong> I've
        also worked on real-life projects using different
        programming languages such as <strong>Python, Javascript,
        Typescript, and Java.</strong> <br />
        All of this has let me develop what I call "learning
        curve tolerance" which is <strong>my ability to quickly absorb
        and adapt to a new programming language, tech stack, or
        technology</strong>.`,
		SVG: MotivationTech,
		for: ['jur', 'odazjw'],
	},
	{
		title: 'Business acumen',
		content: `In today's economy, <strong>business and technology have become
        extremely symbiotic.</strong> <br />
        However, <strong>most engineers lack the understanding of
        business challenges </strong> when it comes to building their
        solutions. <br />I can say that I am very fortunate to
        have the opportunity to <strong> work inside an innovation hub
        and closely observe and analyze many challenges startups
        confront </strong>when it comes to business decisions. <br />
        For a startup like stonks whose core business is about
        simplifying business deals. I believe each single member
        of the team especially engineers need to understand the
        business side and its challenges in order to build
        impactful solutions for the company.`,
		SVG: MotivationBiz,
		for: ['jur'],
	},
	{
		title: 'Business acumen',
		content: `In today's economy, <strong>business and technology have become
        extremely symbiotic.</strong> <br />
        However, <strong>most engineers lack the understanding of
        business challenges </strong> when it comes to building their
        solutions. <br />I can say that I am very fortunate to
        have the opportunity to <strong> work inside an innovation hub
        and closely observe and analyze many challenges startups
        confront </strong>when it comes to business decisions. <br /> 
		I believe each single member
        of the team especially engineers needs to understand the
        business side and its challenges in order to build
        impactful solutions for the company.`,
		SVG: MotivationBiz,
		for: ['odazjw'],
	},
	{
		title: 'Teamworking',
		content: `I understand being able to work in a team effectively is
        a crucial skill in almost any job. <strong> I have worked in many
        teams in the past, from 2 to 20+ members. </strong> <br />
        During this time, <strong> I developed many interpersonal
        soft skills</strong>, as well as <strong> a good understanding of agile
        approaches</strong> that are widely used for building reliable
        software. <br /><strong>I do hate meetings though :)</strong> they're
        most of the time useless, low-frequency, and time
        consuming.`,
		SVG: MotivationTeamworking,
		for: ['jur', 'odazjw'],
	},
	{
		title: 'Curious child',
		content: `<strong> My strongest asset is curiosity!</strong> I thrive to learn about
        new stuff and go down the rabbit hole to discover new
        ideas and concepts. In fact, <strong>one of the reasons I
        particularly aspire to get into stonks is to learn from
        you Ali </strong>(You exited streamlabs, now you crushing it with
        stonks, so you clearly know how to win). <br />I must
        admit that <strong>it's sometimes a bad habit</strong> when It comes to
        being efficient and productive, but <strong> It's also a way to
        come up with creative and original ideas.</strong>`,
		SVG: MotivatinCurious,
		for: ['jur'],
	},
	{
		title: 'Curious child',
		content: `<strong> My strongest asset is curiosity!</strong> I thrive to learn about
        new stuff and go down the rabbit hole to discover new
        ideas and concepts. In fact, <strong>one of the reasons I
        particularly aspire to get into thirdweb is to learn from
        you Furqan </strong>(You exited applovin, now you crushing it with
        thirdweb, so you clearly know how to win). <br />I must
        admit that <strong>it's sometimes a bad habit</strong> when It comes to
        being efficient and productive, but <strong> It's also a way to
        come up with creative and original ideas.</strong>`,
		SVG: MotivatinCurious,
		for: ['odazjw'],
	},
	{
		title: 'I am a winner',
		content: `Throughout my life, <strong>I've had all the reasons to NOT be
        successful</strong>. Being born poor, living in a third-world
        country, losing my mother by age three, unemployed
        father, dangerous neighborhood and the list goes on and
        on.
        <br /> But with time passing by, <strong>I've realized that I do
        have the mindset and the discipline to achieve whatever
        I set my mind to. </strong><br />
        Today, I am living in France, studying at one of the
        best universities in the world, and <strong>potentially working
        in one of the best companies on earth :).</strong>
        <br /> I'm not telling this to crave pity or sympathy
        but to rightly show that <strong>those circumstances are in fact
        the reason why I am and will always be a winner.</strong>`,
		SVG: MotivationWinner,
		for: ['jur', 'odazjw'],
	},
];

export const PORTFOLIO_DATA = [
	{
		id: 1,
		github: 'https://github.com/YounesAEO/travel-log-app',
		demo: 'https://dribble.com',
		image: require('../assets/travel-log.png'),
		title: 'Travel Log App',
	},
	{
		id: 3,
		github: 'https://github.com/YounesAEO/dense-cell-counting',
		demo: 'https://dribble.com',
		image: require('../assets/cell-counting.png'),
		title: 'CSRNet For Cell Counting in Highly Congested Scenes',
	},
	{
		id: 2,
		github: 'https://github.com/YounesAEO/sayhi',
		demo: 'https://dribble.com',
		image: require('../assets/hi.jfif'),
		title: 'Say Hi',
	},

	{
		id: 4,
		github: 'https://github.com/YounesAEO/google-maps-clone',
		demo: 'https://dribble.com',
		image: require('../assets/google-maps-clone.png'),
		title: 'Google Maps Clone',
	},
	{
		id: 6,
		github: 'https://github.com/YounesAEO/webscraper',
		demo: 'https://african-webscraper.herokuapp.com/index2.html',
		image: require('../assets/webscraper.png'),
		title: 'African Startups WebScraper',
	},
	{
		id: 5,
		github: 'https://github.com/YounesAEO/yolov3-accident-detection',
		demo: 'https://dribble.com',
		image: require('../assets/traffic-vision.png'),
		title: 'Traffic Vision',
	},
];

export const EXP_FRONT = [
	{
		skill: 'HTML',
		level: 'Experienced',
	},
	{
		skill: 'CSS',
		level: 'Intermediate',
	},
	{
		skill: 'JavaScript',
		level: 'Experienced',
	},
	{
		skill: 'Bootstrap',
		level: 'Intermediate',
	},
	{
		skill: 'React',
		level: 'Experienced',
	},
	{
		skill: 'Tailwind',
		level: 'Intermediate',
	},
	{
		skill: 'NextJs',
		level: 'Intermediate',
	},
	{
		skill: 'SWR',
		level: 'Intermediate',
	},
];

export const EXP_BACK = [
	{
		skill: 'NodeJs',
		level: 'Experienced',
	},
	{
		skill: 'ExpressJs',
		level: 'Intermediate',
	},
	{
		skill: 'MongoDB',
		level: 'Experienced',
	},
	{
		skill: 'Redis',
		level: 'Intermediate',
	},
	{
		skill: 'MySQL',
		level: 'Intermediate',
	},
	{
		skill: 'AWS S3',
		level: 'Experienced',
	},
	{
		skill: 'Docker',
		level: 'Intermediate',
	},
	{
		skill: 'Google APIs',
		level: 'Experienced',
	},
];

export const EXP_DATA = [
	{
		skill: 'Python',
		level: 'Experienced',
	},
	{
		skill: 'PyTorch',
		level: 'Learning',
	},
	{
		skill: 'Scikit-learn',
		level: 'Intermediate',
	},
	{
		skill: 'Pandas/Numpy',
		level: 'Intermediate',
	},
	{
		skill: 'Neo4G',
		level: 'Intermediate',
	},
	{
		skill: 'Neural Nets',
		level: 'Learning',
	},
];

export const EXP_MGMT = [
	{
		skill: 'Scrum',
		level: 'Experienced',
	},
	{
		skill: 'Kanban',
		level: 'Experienced',
	},
	{
		skill: 'Git',
		level: 'Intermediate',
	},
	{
		skill: 'Notion',
		level: 'Experienced',
	},
];
