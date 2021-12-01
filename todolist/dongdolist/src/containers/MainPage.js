import styled from "styled-components";
import TodoBody from "../components/TodoBody";
import TodoHead from "../components/TodoHead";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  position: relative; 
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
export default function MainPage() {
  return (
    <TodoTemplateBlock>
      <TodoHead />
      <TodoBody />
    </TodoTemplateBlock>
  );
}