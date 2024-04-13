import { useState } from "react";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useToast } from "@chakra-ui/react";

const MessageModal = ({ isOpen, onClose, developer }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const toast = useToast();

  const handleSubmit = () => {
    setEmailError(null);
    setMessageError(null);

    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (!message) {
      setMessageError("Message is required");
    }

    if (!emailError && !messageError) {
      onClose();
      toast({
        title: "Message sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Message {developer.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={emailError} mb={4}>
            <FormLabel>From</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={messageError}>
            <FormLabel>Message</FormLabel>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <FormErrorMessage>{messageError}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Send
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
