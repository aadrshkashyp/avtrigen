import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e0e0e0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: -8px -8px 16px #aaaaaa, 8px 8px 16px #ffffff;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1em;
`;

const StyledAvatar = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 21px;
  box-shadow: -8px -8px 16px #aaaaaa, 8px 8px 16px #ffffff;
  margin-bottom: 1em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #aaaaaa, -5px -5px 10px #ffffff;
  color: #333;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 2px 2px 5px #aaaaaa, inset -2px -2px 5px #ffffff;
  }
`;

const Avatar = ({ size }) => {
  const [avatar, setAvatar] = useState(null);

  const fetchAvatar = async () => {
    const response = await axios.get(`http://localhost:6500/avatar/${size}`, {
      responseType: "text",
    });
    setAvatar(`data:image/svg+xml;utf8,${encodeURIComponent(response.data)}`);
  };

  useEffect(() => {
    fetchAvatar();
  }, [size]);

  return (
    <Container>
      <Card>
        <Title>Avatar Generator</Title>
        {avatar && (
          <StyledAvatar src={avatar} alt="Generated avatar" size={size} />
        )}
        <Button onClick={fetchAvatar}>Generate new avatar</Button>
      </Card>
    </Container>
  );
};

export default Avatar;
