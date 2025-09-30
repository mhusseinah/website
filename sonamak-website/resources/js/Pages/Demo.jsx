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

export default function Demo() {
    const { trans } = useLocalization();
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        company_name: '',
        specialty: '',
        region: 'ME',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('demo.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Book a Demo" />
            <div className="container mx-auto py-12 px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-2">
                        {trans('book_a_demo')}
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Let's show you how Sonamak can streamline your practice.
                    </p>

                    {flash.success && (
                        <div className="mb-4 font-medium text-sm text-green-600 bg-green-100 p-4 rounded-md">
                            {flash.success}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="name" value="Full Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="email" value="Email Address" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="company_name" value="Clinic / Company Name" />
                            <TextInput
                                id="company_name"
                                name="company_name"
                                value={data.company_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('company_name', e.target.value)}
                            />
                            <InputError message={errors.company_name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="specialty" value="Specialty" />
                            <select
                                id="specialty"
                                name="specialty"
                                value={data.specialty}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                onChange={(e) => setData('specialty', e.target.value)}
                            >
                                <option value="">Select a specialty</option>
                                <option value="Dentistry">Dentistry</option>
                                <option value="Oncology">Oncology</option>
                                <option value="OB/GYN">OB/GYN</option>
                                <option value="Multi-specialty">Multi-specialty Clinic</option>
                                <option value="Diagnostic">Diagnostic Center</option>
                                <option value="Other">Other</option>
                            </select>
                            <InputError message={errors.specialty} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="region" value="Region" />
                            <select
                                id="region"
                                name="region"
                                value={data.region}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                onChange={(e) => setData('region', e.target.value)}
                                required
                            >
                                <option value="ME">Middle East</option>
                                <option value="USA">USA</option>
                            </select>
                            <InputError message={errors.region} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-8">
                            <button
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-25"
                                disabled={processing}
                            >
                                {processing ? 'Submitting...' : 'Request a Demo'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Demo.layout = page => <MainLayout children={page} />;