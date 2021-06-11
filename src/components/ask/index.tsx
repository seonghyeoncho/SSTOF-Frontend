import React, { useState } from "react";
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
  AskPostButton,
} from "./styles";
import { Input } from "../markdown";
import PreviewMD from "../markdown/PreviewMD";

const AskQuestion: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [askText, setAskText] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeAsk = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAskText(e.target.value);
  };
  const onChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <AskTitle>Ask Question!</AskTitle>
        <AskContentWrapper>
          <AskContainer>
            <AskTitleInputContainer>
              <AskTitleInputText>Title</AskTitleInputText>
              <AskTitleInput
                placeholder="제목을 입력하세요."
                value={title}
                onChange={onChangeTitle}
              />
            </AskTitleInputContainer>
            <AskBodyContainer>
              <AskBodyText>Body</AskBodyText>
              <AskBodyTextArea>
                <Input
                  value={askText}
                  onChange={onChangeAsk}
                  placeholder="질문을 작성해보세요!"
                />
              </AskBodyTextArea>
            </AskBodyContainer>
            <AskPreviewContainer>
              <AskPreviewContent>
                <PreviewMD value={askText}/>
              </AskPreviewContent>
            </AskPreviewContainer>
            <SelectAskTagsContainer>
              <SelectAskTagsTitle>Tags</SelectAskTagsTitle>
              <SelectAskTagsInput
                placeholder="태그를 입력하세요."
                value={tags}
                onChange={onChangeTag}
              />
            </SelectAskTagsContainer>
          </AskContainer>
          <AskRightSiedBarContainer></AskRightSiedBarContainer>
        </AskContentWrapper>
        <AskPostButtonContainer>
          <AskPostButton>Post your Question!</AskPostButton>
        </AskPostButtonContainer>
      </Wrapper>
    </Container>
  );
};
export default AskQuestion;
