import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { Image } from 'expo-image';

import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LogoMarvel from './assets/app/icons/marvel.svg'

import hero from './assets/app/icons/hero.svg'
import villain from './assets/app/icons/villain.svg'
import alien from './assets/app/icons/alien.svg'
import human from './assets/app/icons/human.svg'
import antiHero from './assets/app/icons/antihero.svg'
import { useState } from 'react';

const villains = [
  {
    name: 'Dr doom',
    image: require(`./assets/app/chars/dr-doom.png`)
  },
  {
    name: 'Green goblin',
    image: require(`./assets/app/chars/green-goblin.png`)
  },
  {
    name: 'Red Skull',
    image: require(`./assets/app/chars/red-skull.png`)
  },
]

const aliens = [

  {
    name: 'Thanos',
    image: require(`./assets/app/chars/thanos.png`)
  },
  {
    name: 'Venom',
    image: require(`./assets/app/chars/venom.png`)
  },

]



const heroies = [

  {
    name: 'Black panther',
    image: require(`./assets/app/chars/black-panther.png`)
  },
  {
    name: 'Spider man',
    image: require(`./assets/app/chars/spider-man.png`)
  },
  {
    name: 'talos',
    image: require(`./assets/app/chars/talos.png`)
  },

]

const humans = [

  {
    name: 'Happy',
    image: require(`./assets/app/chars/happy-hogan.png`)
  },
  {
    name: 'Mary jane',
    image: require(`./assets/app/chars/mary-jane.png`)
  },
  {
    name: 'Howard Stark',
    image: require(`./assets/app/chars/howard-stark.png`)
  }
]

const anti = [

  {
    name: 'Dead pool',
    image: require(`./assets/app/chars/deadpool.png`)
  },
  {
    name: 'Punisher',
    image: require(`./assets/app/chars/punisher.png`)
  },

]


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={LogoMarvel}
            contentFit="contain"
          />
        </View>

        <Text>Bem vindo ao Marvel Heroes</Text>

        <Text>Escolha seu personagem</Text>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={hero} style={styles.imageCategory} />
          </TouchableOpacity>

          <Image source={antiHero} style={styles.imageCategory} />
          <Image source={alien} style={styles.imageCategory} />
          <Image source={villain} style={styles.imageCategory} />
          <Image source={human} style={styles.imageCategory} />
        </View>

        <View style={styles.scroll}>

          <View style={styles.headerScroll}>
            <Text>Vilões</Text>
            <Text>3 itens</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {
              villains.map(hero => (
                <Image
                  style={styles.hero}
                  key={hero.name}
                  source={hero.image}
                  contentFit='cover'
                />
              ))
            }
          </ScrollView>

        </View>


        <View style={styles.headerScroll}>
          <Text>Vilões</Text>
          <Text>3 itens</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            heroies.map(hero => (
              <Image
                style={styles.hero}
                key={hero.name}
                source={hero.image}
                contentFit='cover'
              />
            ))
          }
        </ScrollView>





        <View style={styles.headerScroll}>
          <Text>Vilões</Text>
          <Text>3 itens</Text>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            humans.map(hero => (
              <Image
                style={styles.hero}
                key={hero.name}
                source={hero.image}
                contentFit='cover'
              />
            ))
          }
        </ScrollView>

        <View style={styles.headerScroll}>
          <Text>Vilões</Text>
          <Text>3 itens</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            aliens.map(hero => (
              <Image
                style={styles.hero}
                key={hero.name}
                source={hero.image}
                contentFit='cover'
              />
            ))
          }
        </ScrollView>

        <View style={styles.headerScroll}>
          <Text>Vilões</Text>
          <Text>3 itens</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            anti.map(hero => (
              <Image
                style={styles.hero}
                key={hero.name}
                source={hero.image}
                contentFit='cover'
              />
            ))
          }
        </ScrollView>

      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll: {
    marginVertical: 40
  },
  image: {
    width: 100,
    height: 100,
  },
  categoriesContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerScroll: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageCategory: {
    width: 50,
    height: 50,
    marginVertical: 20,
  },
  hero: {
    width: 140,
    height: 230,
    borderRadius: 20,
    marginHorizontal: 10,
  }

});
