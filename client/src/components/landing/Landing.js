import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Landing.css';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div id="top_headline">
        <h2>
          Microblading The #1 Beauty Trends In 2017 - SELF
        </h2>
        <h4>
          It's never too late to learn something New!
        </h4>
      </div>
      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img src={"https://az616578.vo.msecnd.net/files/2016/09/07/6360888378872252421154338562_Beauty-e1426485286458.jpg"} alt="hair_strokes"/>
            <div style={{
               width: '100vw',
               height: 'auto',
               backgroundColor: '#450093'
              }}></div>
          </Background>
          <div className="parallax_body">
            <h1>Hair Strokes</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>The Hair Strokes Technique is often considered a type of permanent makeup, however, its concept is different: the ink is deposited with manual pen with blade which is 2 times thinner than average human hair and that allows technicians to draw crisp, thin and natural looking hairs.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/hair_strokes'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img src={"https://az616578.vo.msecnd.net/files/2016/09/07/6360888378872252421154338562_Beauty-e1426485286458.jpg"} alt="hair_strokes"/>
            <div style={{
               width: '100vw',
               height: 'auto',
               backgroundColor: '#450093'
              }}></div>
          </Background>
          <div className="parallax_body">
            <h1>Powdered</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>he Powdered fill method involves the application of thousands of tiny little dots of pigment, inserted into the skin, gradually building up a colour and a defined shape. Hair Strokes method can be done on top of the Powered method for definitions.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/powdered'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img src={"https://az616578.vo.msecnd.net/files/2016/09/07/6360888378872252421154338562_Beauty-e1426485286458.jpg"} alt="hair_strokes"/>
            <div style={{
               width: '100vw',
               height: 'auto',
               backgroundColor: '#450093'
              }}></div>
          </Background>
          <div className="parallax_body">
            <h1>Lips</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>The Lip tattoos are designed to define lips, not to create volume or puffiness, it will give you the appearance of a full lip. Pigmentations can be inserted to obtain more natural lip color or more vibrant colors, retouch time frame varies depend on the desired colors.</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/lips'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax">
        <Parallax strength={500}>
          <Background>
            <img src={"https://az616578.vo.msecnd.net/files/2016/09/07/6360888378872252421154338562_Beauty-e1426485286458.jpg"} alt="hair_strokes"/>
            <div style={{
               width: '100vw',
               height: 'auto',
               backgroundColor: '#450093'
              }}></div>
          </Background>
          <div className="parallax_body">
            <h1>Eyeliner</h1>
            <h3>Permanent Makeup</h3>
            <div className="section_text">
              <p>Permanent eyeliner is placed in the lash line, which enhances and defines the beauty of the eyes. The technique is a very natural look and will make lashes appear thicker when not wearing mascara. It opens the eyes and makes them "pop".</p>
            </div>
            <div className="section_footer">
              <LinkContainer to={'/seminars/lips'}>
                <Button>
                  Get More Info
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Parallax>
      </div>

    </div>
  );
};

export default Landing;
