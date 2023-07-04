import { srConfig } from '@config';
import { media, mixins, Section, theme } from '@styles';
import sr from '@utils/sr';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const { fontSizes } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;

const Articles = () => {
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Recent Tech Talks & Articles</StyledTitle>
      <br />
      <div
        style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', width: '100%' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLoiJ_gmQawWJvAQIfAWhBkrWRiNIL3FYU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </StyledContainer>
  );
};

Articles.propTypes = {
  data: PropTypes.array,
};

export default Articles;
