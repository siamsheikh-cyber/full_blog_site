import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCreateMutation } from "@/redux/modules/category/category.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is Required"),
});

function Login() {

    const [createCat] = useCreateMutation()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            const res = await createCat(data).unwrap()
            if (res.status == "success") {
                toast.success("Title created successfully")
            }
            navigate('/me/all-category')
        } catch (error) {
            toast.error("Title Create failed")
            console.log(error);

        }
    };

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="max-w-xs w-full flex flex-col items-center border p-4">

                <p className="mt-4 text-xl font-semibold tracking-tight">
                    Create Category
                </p>

                <div className="my-7 w-full flex items-center justify-center overflow-hidden">
                    <Separator />

                </div>
                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Create Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Title"
                                            className="w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mt-4 w-full cursor-pointer">
                            Save Title
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default Login;