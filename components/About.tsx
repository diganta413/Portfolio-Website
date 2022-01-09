import Title,{TitleProps} from "./Title";

const about = ():JSX.Element => {

	return (
		<div className="ml-[30%] mt-[20%]">
			<Title name="About" index="01."/>
			<div className="flex items-center justify-left mt-10 w-[60%]">
				<p className="text-textLight text-xl">
					I'm a Full Stack Developer who loves to create things that live on the internet.
					I love to design and develop websites using new emerging technologies.
					I love learning new technologies and diving into every details of them.
					Once I learn a new technology, I like to document my learnings through writing a blog 
					so that others could benefit from them.
				</p>
				<img src="https://res.cloudinary.com/dwch3obej/image/upload/v1641715712/Portfolio_image_q3851l.png"
				 height="200" width="200" className="ml-[100px]"/>
			</div>
		</div>
	)
	}

export default about;
