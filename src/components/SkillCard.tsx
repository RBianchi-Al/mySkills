import React from 'react';
import {StyleSheet, Text,TouchableOpacity, TouchableOpacityProps} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export function SkillCard({ skill, ...rest }:SkillCardProps){
    return (
            <TouchableOpacity 
            style={styles.buttonsSkill}
            {...rest}
            >
              <Text style={styles.skill}>
               {skill}
              </Text>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  skill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonsSkill:{
    padding: 15,
    backgroundColor: "#1F1E25",
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  }
  })