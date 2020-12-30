import type { FormField } from './types';
import * as Yup from 'yup';

// components
import TextInput from 'components/Form/TextInput';
import TextArea from 'components/Form/TextArea';

// fields
type FormData = {
  title: string;
  description: string;
};

type Names = keyof FormData;

const formFields: Array<FormField<Names>> = [
  {
    Element: TextInput,
    name: 'title',
    placeholder: 'Title',
    testID: 'title',
    label: 'Title1',
  },
  {
    Element: TextArea,
    name: 'description',
    placeholder: 'A few word about your event',
    testID: 'message',
  },
];

const schema: Yup.SchemaOf<FormData> = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export type { FormData, Names };
export { formFields, schema };
