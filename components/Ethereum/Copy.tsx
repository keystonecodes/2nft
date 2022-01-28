import React, { ReactElement } from 'react'
import styled from 'styled-components'
import useCopyClipboard from '../../contexts/hooks/useCopyClipboard'
import { Copy } from 'react-feather'

const CopyIcon = styled.button`
  color: "black";
  border: none;
  text-decoration: none;
  background-color: "black";
  font-size: 1rem;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: "black";
  }
`
const TransactionStatusText = styled.span`
  font-size: 1rem;
  align-items: center;
`

export default function CopyHelper(props: { toCopy: string; children?: React.ReactNode }): ReactElement {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <CopyIcon onClick={() => setCopied(props.toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
          <TransactionStatusText>Copied</TransactionStatusText>
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
         
        </TransactionStatusText>
      )}
      {isCopied ? '' : props.children}
    </CopyIcon>
  )
}