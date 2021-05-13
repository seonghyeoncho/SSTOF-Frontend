import React, { useState } from 'react';
import { 
    AskBodyContainer, 
    AskBodyText, 
    AskContainer, 
    AskPreviewContainer, 
    AskRightSiedBarContainer,
    AskTitle, 
    AskTitleInput, 
    AskTitleInputContainer, 
    AskTitleInputText, 
    Container, 
    Wrapper, 
    AskPreviewContent,
    SelectAskTagsContainer,
    SelectAskTagsTitle,
    SelectAskTagsInput,
    AskContentWrapper,
    AskBodyTextArea,
    AskPostButtonContainer,
    AskPostButton
} from './styles';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const components = {
    code({node, inline, className, children, ...props}: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={dark} language={match[1]} PreTag="pre" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    }
}

const AskQuestion: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [askText, setAskText] = useState<string>("");
    const [tags, setTags] = useState<string>("");

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onChangeAsk = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAskText(e.target.value);
    }
    const onChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value);
    }

    return (
        <Container>
            <Wrapper>
                <AskTitle>
                    Ask Question!
                </AskTitle>
                <AskContentWrapper>
                    <AskContainer>
                        <AskTitleInputContainer>
                            <AskTitleInputText>
                                Title
                            </AskTitleInputText>
                            <AskTitleInput 
                                placeholder="제목을 입력하세요." 
                                value={title} 
                                onChange={onChangeTitle}
                            />
                        </AskTitleInputContainer>
                        <AskBodyContainer>
                            <AskBodyText>
                                Body
                            </AskBodyText>
                            <AskBodyTextArea>
                                <TextareaAutosize
                                    value={askText}
                                    onChange={onChangeAsk}
                                    placeholder="질문을 작성해보세요!"
                                    style={
                                        {
                                            resize:"none",
                                            background:"#363636", 
                                            color:"white", 
                                            outline:"none", 
                                            width:"100%", 
                                            border:"none",
                                            borderRadius:"5px",
                                            padding: "5px",
                                            fontSize: "16px"
                                        }
                                    }
                                    minRows={20}
                                    spellCheck={false}
                                />
                            </AskBodyTextArea>
                        </AskBodyContainer>
                        <AskPreviewContainer>
                            <AskPreviewContent>
                                <>
                                    <ReactMarkdown
                                        components={components}
                                        remarkPlugins={[gfm]}
                                        children={askText}
                                    />
                                </>
                            </AskPreviewContent>
                        </AskPreviewContainer>
                        <SelectAskTagsContainer>
                            <SelectAskTagsTitle>
                                Tags
                            </SelectAskTagsTitle>
                            <SelectAskTagsInput
                                placeholder="태그를 입력하세요."
                                value={tags}
                                onChange={onChangeTag}
                            />
                        </SelectAskTagsContainer>
                    </AskContainer>
                    <AskRightSiedBarContainer>

                    </AskRightSiedBarContainer>
                </AskContentWrapper>
                <AskPostButtonContainer>
                    <AskPostButton>
                        Post your Question!
                    </AskPostButton>
                </AskPostButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default AskQuestion;