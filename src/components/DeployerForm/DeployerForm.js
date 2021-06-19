import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'

import { useContractFunction, useEthers } from '@usedapp/core'
import { utils, Contract } from 'ethers'
import { Formik, Form, Field } from 'formik'

const DeployerForm = ({ contractAddress, ABI }) => {
  const { library } = useEthers()

  const contract = new Contract(contractAddress, ABI, library?.getSigner())
  console.log(
    '🚀 ~ file: DeployerForm.js ~ line 17 ~ DeployerForm ~ contract',
    contract
  )

  const { state, send } = useContractFunction(contract, 'deployGovernance', {
    transactionName: 'DeployGovernance',
  })

  console.log('State: ', state)

  const initialValues = {
    admin: '',
    name: 'Test Name',
    symbol: '',
    totalSupply: '',
    timeLockDelay: '',
    quorumVotes: '',
    proposalThreshold: '',
    votingPeriod: '',
  }

  const validateString = (value) => false

  const validateAddress = (value) => false

  const validateInteger = (value) => false

  const handleSubmit = (values, actions) => {
    send(
      values.admin,
      values.name,
      values.symbol,
      values.totalSupply,
      values.timeLockDelay,
      values.quorumVotes,
      values.proposalThreshold,
      values.votingPeriod
    )
    console.log('Here')
    console.log(values, actions)
  }

  return (
    <Formik initialValues={{ ...initialValues }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Field name="name" validate={validateString}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Token Name</FormLabel>
                <Input {...field} id="name" placeholder="Token Name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="symbol" validate={validateString}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.symbol && form.touched.symbol}
              >
                <FormLabel htmlFor="symbol">Token symbol</FormLabel>
                <Input {...field} id="symbol" placeholder="Token symbol" />
                <FormErrorMessage>{form.errors.symbol}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="admin" validate={validateAddress}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.admin && form.touched.admin}>
                <FormLabel htmlFor="admin">Admin</FormLabel>
                <Input {...field} id="admin" placeholder="Admin address" />
                <FormErrorMessage>{form.errors.admin}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="totalSupply" validate={validateInteger}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.totalSupply && form.touched.totalSupply}
              >
                <FormLabel htmlFor="totalSupply">totalSupply</FormLabel>
                <Input {...field} id="totalSupply" placeholder="totalSupply" />
                <FormErrorMessage>{form.errors.totalSupply}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="timeLockDelay" validate={validateInteger}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.timeLockDelay && form.touched.timeLockDelay
                }
              >
                <FormLabel htmlFor="timeLockDelay">timeLockDelay</FormLabel>
                <Input
                  {...field}
                  id="timeLockDelay"
                  placeholder="timeLockDelay"
                />
                <FormErrorMessage>{form.errors.timeLockDelay}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="quorumVotes" validate={validateInteger}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.quorumVotes && form.touched.quorumVotes}
              >
                <FormLabel htmlFor="quorumVotes">quorumVotes</FormLabel>
                <Input {...field} id="quorumVotes" placeholder="quorumVotes" />
                <FormErrorMessage>{form.errors.quorumVotes}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="proposalThreshold" validate={validateInteger}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.proposalThreshold &&
                  form.touched.proposalThreshold
                }
              >
                <FormLabel htmlFor="proposalThreshold">
                  proposalThreshold
                </FormLabel>
                <Input
                  {...field}
                  id="proposalThreshold"
                  placeholder="proposalThreshold"
                />
                <FormErrorMessage>
                  {form.errors.proposalThreshold}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="votingPeriod" validate={validateInteger}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.votingPeriod && form.touched.votingPeriod
                }
              >
                <FormLabel htmlFor="votingPeriod">votingPeriod</FormLabel>
                <Input
                  {...field}
                  id="votingPeriod"
                  placeholder="votingPeriod"
                  border="0px"
                  borderRadius="5px"
                  background="#f0f0f0"
                  boxShadow="6px 6px 11px #cccccc,
             -6px -6px 11px #ffffff"
                />
                <FormErrorMessage>{form.errors.votingPeriod}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default DeployerForm
