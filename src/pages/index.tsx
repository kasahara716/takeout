import React from 'react';
import {
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Header from '../components/Header';

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  takeout.dev
                </Typography>
                <Typography variant="body2" component="p">
                  現在は個人運営していますがCOVID-19で困っている飲食店を少しでも助けられればと開発を進めました。
                  <br />
                  現在も{'"STAY HOME"'}
                  で余っている時間を有効活用し、機能拡張を進めています。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Typography variant="h5" component="h2">
              TAKEOUTサイト一覧
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardActionArea href="https://kawasaki.takeout.dev">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    TAKEOUT＠川崎
                  </Typography>
                  <Typography variant="body2" component="p">
                    神奈川県川崎市の持ち帰り・テイクアウト店舗を紹介しています
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexPage;
