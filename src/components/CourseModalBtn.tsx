import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Textarea, Text } from '@mantine/core';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { theme } from '@themes/theme';
// Course schema
// coursename
// description
// link
// completed
// startdate
// due
// priority
// notes
// group_tags
// days
export default function CourseModalBtn({ title }: { title: string}) {
    const [opened, { open, close }] = useDisclosure(false);
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    return (
    <div>
        <Modal opened={opened} onClose={close} title={title} centered>
            <TextInput label="Course name" placeholder="Course name" 
            data-autofocus/>
            <Textarea
            label="Description"
            placeholder="Description"
            mt="md"
            />
            <TextInput
            label="Link"
            placeholder="Link"
            mt="md"
            />
            <div className='flex flex-row justify-between mt-3'>
                <div className='flex flex-col'>
                    <Text>Start date</Text>
                    <DatePicker selected={startDate} onChange={(date) => date && setStartDate(date)} className='border rounded'/>
                </div>
                <div className='flex flex-col'>
                    <Text>Due date</Text>
                    <DatePicker selected={dueDate} onChange={(date) => date && setDueDate(date)} className='border rounded'/>
                </div>
            </div>
            {/* <DatePickerInput
            label="Start date"
            placeholder="Start date"
            value={value}
            onChange={setValue}
            />
            <DatePickerInput
            label="Due date"
            placeholder="Due date"
            value={value}
            onChange={setValue}
            /> */}
            {/* <TextInput
            label="Priority"
            placeholder="Priority"
            mt="md"
            /> */}
            <TextInput
            label="Notes"
            placeholder="Notes"
            mt="md"
            />
            <TextInput
            label="Group tags"
            placeholder="Group tags"
            mt="md"
            />
            <TextInput
            label="Days"
            placeholder="Days"
            mt="md"
            />
            <Button onClick={close} className='border border-sky-500 rounded mt-4'><Text c={theme.primaryColor} className='text-bold'>Confirm</Text></Button>
        </Modal>

        <Button onClick={open} className='absolute right-5 bottom-5 border border-sky-500 rounded'><Text c={theme.primaryColor} className='text-bold'>{title}</Text></Button>
    </div>
    );
}