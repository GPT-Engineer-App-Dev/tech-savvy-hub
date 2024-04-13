import { Box, Checkbox, Stack } from "@chakra-ui/react";

const SpecialtyFilter = ({ specialties, selectedSpecialties, onChange }) => {
  return (
    <Box>
      <Stack spacing={2}>
        {specialties.map((specialty) => (
          <Checkbox key={specialty} isChecked={selectedSpecialties.includes(specialty)} onChange={() => onChange(specialty)}>
            {specialty}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};

export default SpecialtyFilter;
