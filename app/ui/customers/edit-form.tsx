'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { State, updateCustomer } from '@/app/lib/actions';
import React, { useActionState } from 'react';
import {AtSymbolIcon, PhotoIcon, UserCircleIcon} from '@heroicons/react/24/outline';
import { CustomerField } from '@/app/lib/definitions';

export default function EditCustomerForm({
 customer
}: {
    customer: CustomerField;
}) {
    const initialState: State = { message: null, errors: {} };
    const updateCustomerWithId = (state: State, formData: FormData) => updateCustomer(customer.id, state, formData);
    const [ , formAction ] = useActionState(updateCustomerWithId, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Customer Name"
                            defaultValue={customer.name}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <UserCircleIcon
                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                    </div>
                </div>

                {/* Customer Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Customer Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Customer Email"
                                defaultValue={customer.email}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <AtSymbolIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                        </div>
                    </div>
                </div>

                {/* Customer Image Url */}
                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Customer Image
                    </label>

                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image"
                                name="image"
                                type="text"
                                defaultValue={customer.image_url}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <PhotoIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/customers"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Customer</Button>
            </div>
        </form>
    );
}