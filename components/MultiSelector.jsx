import { Autocomplete, Chip, TextField } from '@mui/material';
import React from 'react';

const MultiSelector = ({onSelectionChange}) => {
    const options = [
        { label: "JavaScript", id: 1 },
        { label: "React", id: 2 },
        { label: "Node.js", id: 3 },
        { label: "MongoDB", id: 4 },
        { label: "TypeScript", id: 5 },
    ];

    const [selectedOptions, setSelectedOptions] = React.useState([]);

    const handleChange = (event, newValue) => {
        setSelectedOptions(newValue);
        if (onSelectionChange) {
            const labels = newValue.map((item) => item.label)
            onSelectionChange(labels); // Gửi dữ liệu ra ngoài
        }
      };

    return (
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={(option) => option.label}
            value={selectedOptions}
            onChange={handleChange}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        key={option.id}
                        label={option.label}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Select Topics"
                    placeholder="Choose multiple topics"
                />
            )}
        />
    );
};

export default MultiSelector;
