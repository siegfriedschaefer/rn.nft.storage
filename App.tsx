/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NFTStorage, File } from 'nft.storage';
import axios, { AxiosResponse } from 'axios';

import nftagent from './src/nftagent';
import { NFTmetadata } from './src/nftagent';

const NFT_STORAGE_API_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUzMzhCMmQwMmYyMmNEMThhMkVEYkEyZWQyRWYzNmM4MzUxNTdDRTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA1NjAxNTk4NywibmFtZSI6ImNocmlzdG1hc21hcmtldDAwMSJ9.iHWu88IdurL9Owkz1k-GICuJwMScAetVcjhq2JA3CHo';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

async function readNFT() {

//  nftagent.nft.getmetadata();
//  nftagent.NftExample();
  nftagent.NftTest();

  // console.log(metadata.description );

/*
  const nftstorage = new NFTStorage({token: NFT_STORAGE_API_KEY});

  const nft = {
                    image,
                    name,
                    description,
                    properties: {
                        creators: [{name : "mtvs4u"}],
                        type: "Item",
                        model,
                    }
                }



  nftstorage.store(nft);
*/

}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const CID = 'bafyreieefrrow3tdaqc6gnq7eluhw4dae6pvwnsxyqijh4uomg6f7qrteu';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"

        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Section title="RN NFT-MVP">
            <Text>
            This app is the first step to trying to work with nft-like data models.{"\n"} 
            It tries to integrate with IPFS / FILECOIN, using the ipfs.nftstorage.link gateway.
            </Text>
            </Section>
            <Section title="STEP 1 - READ IEC1155 NFT-METADATA">
              <NFTmetadata cid={CID}/>
            </Section>
            <Section title="STEP 2 - INTEGRATE INTO BABYLON.JS">
            TO DO
            </Section>
            <Section title="STEP 3 - MERRY CHRISTMAS">
            The METAVERSE journey has just begun.{"\n"}
            There is a lot to learn, a lot to investigate, a lot of fun. 
            I enjoy you to follow me.{"\n"}{"\n"}
            MERRY CHRISTMAS AND A HAPPY NEW YEAR.       
            </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
