import { Head, useForm, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import useLocalization from '@/Hooks/useLocalization';

const InputLabel = ({ forInput, value, className = '', children }) => (
    <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
        {value ? value : children}
    </label>
);

const TextInput = ({ type = 'text', name, id, value, className = '', autoComplete, required, onChange, ...props }) => (
    <input
        {...props}
        type={type}
        name={name}
        id={id}
        value={value}
        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className}
        required={required}
        onChange={onChange}
    />
);

const InputError = ({ message, className = '' }) => (
    message ? <p className={'text-sm text-red-600 ' + className}>{message}</p> : null
);

export default function RequestBaa() {
    const { trans } = useLocalization();
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        clinic_name: '',
        contact_title: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('request-baa.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout>
            <Head title="Request a BAA" />
            <div className="container mx-auto py-12 px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-2">
                        {trans('request_baa_info')}
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        For US customers handling ePHI, a BAA is required. Please fill out the form below to initiate the process.
                    </p>

                    {flash.success && (
                        <div className="mb-4 font-medium text-sm text-green-600 bg-green-100 p-4 rounded-md">
                            {flash.success}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="name" value="Full Name" />
                            <TextInput id="name" name="name" value={data.name} className="mt-1 block w-full" autoComplete="name" onChange={(e) => setData('name', e.target.value)} required />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="email" value="Work Email Address" />
                            <TextInput id="email" type="email" name="email" value={data.email} className="mt-1 block w-full" autoComplete="email" onChange={(e) => setData('email', e.target.value)} required />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="clinic_name" value="Clinic Name" />
                            <TextInput id="clinic_name" name="clinic_name" value={data.clinic_name} className="mt-1 block w-full" onChange={(e) => setData('clinic_name', e.target.value)} required />
                            <InputError message={errors.clinic_name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="contact_title" value="Your Title (e.g., Compliance Officer, CEO)" />
                            <TextInput id="contact_title" name="contact_title" value={data.contact_title} className="mt-1 block w-full" onChange={(e) => setData('contact_title', e.target.value)} />
                            <InputError message={errors.contact_title} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-8">
                            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-25" disabled={processing}>
                                {processing ? 'Submitting...' : 'Submit BAA Request'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}