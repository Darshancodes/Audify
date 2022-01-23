import { ThirdwebSDK } from '@3rdweb/sdk';
import { Container, Grid, Typography } from '@mui/material';
import { useEthers } from '@usedapp/core';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Header from '../../../src/components/header';
import { useWalletMembershipAccess } from '../../../src/hooks/useMembershipAccess';

const OwnedAudiobookPage: NextPage = () => {
  const [purchasedAudiobooks, setPurchasedAudiobooks] = useState<any[]>([]);

  const { library } = useEthers();
  const router = useRouter();
  const {
    query: { Id },
  } = router;

  const hasAccess = useWalletMembershipAccess(Id as string);

  return (
    <>
      <Head>
        <title>Awesome Audiobooks - Audiobook #{Id}</title>
        <meta
          name="description"
          content={`Awesome Audiobooks - Audiobook #${Id}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h5" style={{ marginBottom: 10 }}>
        Audiobook #{Id}
      </Typography>
      <br />
      <br />

      {hasAccess ? 'You have access' : 'You dont have access'}
      {/* {purchasedAudiobooks.length > 0 && renderPurchasedAudiobooks()} */}
    </>
  );
};

export default OwnedAudiobookPage;