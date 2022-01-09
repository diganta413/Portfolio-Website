export interface TitleProps  {
	name: string;
	index: string;
	}

const Title = ({name,index}: TitleProps):JSX.Element => {
    return (
        <div className="flex justify-left items-center">
			<p className="text-[#64ffda] text-4xl mr-4">{index}</p>
            <p className="text-navBar text-4xl mr-5">{name}</p>
			<svg width="500" height="1" className="stroke-[#8892b0] stroke-2 flex">
				<line x1="0" y1="0" x2="350" y2="0"/>
			</svg>
        </div>
    )
}

export default Title;
