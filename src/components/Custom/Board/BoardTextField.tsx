import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from 'components/Base/Button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from 'components/Base/Form/Form';
import { Input } from 'components/Base/Input/Input';

interface BoardTextFieldProps {
  onSend: (content: string) => void;
}

const BoardTextField = ({ onSend }: BoardTextFieldProps) => {
  const FormSchema = z.object({
    content: z.string().min(1),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data: z.infer<typeof FormSchema>) =>
          onSend(data.content)
        )}
        className="flex items-center"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-1">
              <FormControl>
                <Input
                  className="rounded-none border-none px-4 py-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Post your opinion"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mr-2 h-8 bg-primary-500 hover:bg-primary-600"
        >
          Post
        </Button>
      </form>
    </Form>
  );
};

export default BoardTextField;
