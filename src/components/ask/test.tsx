import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const mer = `
# 굵게
## sdfsdf
fsdfs \n
*dfdf* \n
**sdfsd**



`;

const Test: React.FC = () => {
    return (
        <ReactMarkdown className="hello">
            {mer}
        </ReactMarkdown>
    )
}

export default Test;