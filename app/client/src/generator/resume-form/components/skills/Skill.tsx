import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { Card } from 'common/components/Card'
import { InputWithLabel } from 'common/components/InputWithLabel'
import { Label } from 'common/components/Label'
import { TextInput } from 'common/components/TextInput'
import { darkTheme } from 'common/theme'
import { Skill as SkillType } from '../../types'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`

const RemoveSkillButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0;
  margin: 0;
`

const AddKeywordButton = styled.button`
  background: ${darkTheme.gray};
  color: ${darkTheme.primary};
  font-size: 1.25em;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 0.35em;
  padding: 0;
  width: 2em;
  height: 2em;
  left: 355px;
  top: 674px;
  background: #2f3237;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${lighten(0.1, darkTheme.gray)};
    color: white;
  }
`

const RemoveKeywordButton = styled.button`
  margin: 0;
  margin-left: 1em;
  padding: 0 1em;
  background: ${darken(0.05, darkTheme.gray)};
  color: ${darkTheme.foreground};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${darkTheme.gray};
    background: ${darkTheme.primary};
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

interface RemoveKeyword {
  skillIndex: number
  keywordIndex: number
}

interface Props {
  skill: SkillType
  removeSkill: () => void
  addSkillKeyword: (skillIndex: number) => void
  removeSkillKeyword: (skillIndex: number, keywordIndex: number) => void
  index: number
}

export function Skill({
  skill,
  removeSkill,
  addSkillKeyword,
  removeSkillKeyword,
  index
}: Props) {
  return (
    <Card marginTop="1.5em">
      <InputWithLabel
        name={`skills[${index}].name`}
        label="Skill Category"
        placeholder="Programming Languages"
      />
      <Label>Skill Details</Label>
      {skill.keywords.map((keyword, keywordIndex) => (
        <Row key={keywordIndex}>
          <TextInput
            name={`skills[${index}].keywords[${keywordIndex}]`}
            placeholder="Java"
            component="input"
          />
          <RemoveKeywordButton
            onClick={() => removeSkillKeyword(index, keywordIndex)}
          >
            X
          </RemoveKeywordButton>
        </Row>
      ))}
      <ButtonWrapper>
        <AddKeywordButton onClick={() => addSkillKeyword(index)}>
          +
        </AddKeywordButton>
      </ButtonWrapper>
      <RemoveSkillButton type="button" onClick={removeSkill}>
        X
      </RemoveSkillButton>
    </Card>
  )
}
