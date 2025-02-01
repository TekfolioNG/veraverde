<template>
    <div class="bg-white py-16">
        <div class="container mx-auto px-6">
            <!-- Page Heading -->
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">
                    Our Products
                </h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our comprehensive range of enterprise-grade technology solutions from <b>trusted OEM
                        partners like
                        Cisco, Oracle, IBM, HP, and Dell.</b> Built for reliability, performance, and scalability, our
                    products
                    ensure your business stays ahead in a rapidly evolving digital landscape.
                </p>
            </div>

            <!-- Product Grid -->
            <div class="space-y-20">
                <!-- Enterprise Servers -->
                <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Enterprise-Servers.jpg" alt="Enterprise Servers"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Enterprise Servers</h2>
                        <p class="text-gray-600 mb-4">
                            Our enterprise servers provide scalable computing solutions tailored to meet the demands of
                            modern
                            businesses. Designed for high performance and reliability, they are ideal for data-intensive
                            applications
                            and mission-critical workloads.
                        </p>
                        <p class="text-gray-600">
                            Whether you're running a small business or a large enterprise, our servers deliver the power
                            and flexibility
                            you need to stay competitive in today's fast-paced digital environment.
                        </p>
                    </div>
                </div>

                <!-- Enterprise Storage Solutions -->
                <div class="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Enterprise-Storage.png" alt="Enterprise Storage Solutions"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Enterprise Storage Solutions</h2>
                        <p class="text-gray-600 mb-4">
                            Secure and high-capacity storage solutions designed to manage your growing data needs. Our
                            storage systems
                            ensure accessibility, protection, and scalability for businesses of all sizes.
                        </p>
                        <p class="text-gray-600">
                            From network-attached storage (NAS) to storage area networks (SAN), we provide solutions
                            that optimize
                            data management and ensure business continuity.
                        </p>
                    </div>
                </div>

                <!-- Converged & Hyper-Converged Systems -->
                <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Converged-Systems.png" alt="Converged & Hyper-Converged Systems"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Converged & Hyper-Converged Systems</h2>
                        <p class="text-gray-600 mb-4">
                            Integrated IT infrastructure solutions that combine computing, storage, and networking for
                            optimized
                            performance and simplified management. Our converged and hyper-converged systems are
                            designed to reduce
                            complexity and improve efficiency.
                        </p>
                        <p class="text-gray-600">
                            Whether you're consolidating your data center or deploying a new infrastructure, our
                            solutions provide
                            the flexibility and scalability you need.
                        </p>
                    </div>
                </div>

                <!-- Routers & Switches -->
                <div class="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Routers-Switches.png" alt="Routers & Switches"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Routers & Switches</h2>
                        <p class="text-gray-600 mb-4">
                            Reliable networking hardware that ensures seamless data flow and connectivity across your
                            organization.
                            Our routers and switches are designed for high performance, security, and scalability.
                        </p>
                        <p class="text-gray-600">
                            From small offices to large enterprises, our solutions provide the foundation for a robust
                            and efficient
                            network infrastructure.
                        </p>
                    </div>
                </div>

                <!-- Wireless Solutions -->
                <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Wireless-Solutions.jpg" alt="Wireless Solutions"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Wireless Solutions</h2>
                        <p class="text-gray-600 mb-4">
                            Enterprise-grade Wi-Fi solutions that provide robust and secure wireless connectivity for
                            your business.
                            Our wireless access points and controllers are designed to deliver high-speed, reliable
                            connectivity
                            across your organization.
                        </p>
                        <p class="text-gray-600">
                            From small offices to large campuses, our solutions ensure seamless connectivity for your
                            employees and
                            customers.
                        </p>
                    </div>
                </div>

                <!-- Network Security -->
                <div class="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Network-Security.jpg" alt="Network Security"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Network Security</h2>
                        <p class="text-gray-600 mb-4">
                            Advanced security solutions, including firewalls and VPNs, to protect your network from
                            cyber threats and
                            ensure data integrity. Our solutions are designed to safeguard your business from evolving
                            security risks.
                        </p>
                        <p class="text-gray-600">
                            From threat detection to incident response, we provide comprehensive security solutions
                            tailored to your
                            needs.
                        </p>
                    </div>
                </div>

                <!-- Power Conditioning Systems -->
                <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Power-Conditioning.png" alt="Power Conditioning Systems"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Power Conditioning Systems</h2>
                        <p class="text-gray-600 mb-4">
                            Uninterruptible power supplies (UPS) and inverters that ensure stable and reliable power for
                            your critical
                            systems. Our solutions are designed to protect your infrastructure from power outages,
                            surges, and
                            fluctuations.
                        </p>
                        <p class="text-gray-600">
                            From small offices to large data centers, we provide power solutions that ensure
                            uninterrupted operations
                            and business continuity.
                        </p>
                    </div>
                </div>

                <!-- Unified Communications -->
                <div class="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 lg:w-2/5">
                        <img src="@/assets/img/Unified-Communications.png" alt="Unified Communications"
                            class="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/5 bg-[#F0F5FA] p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-[#1E3A5F] mb-4">Unified Communications</h2>
                        <p class="text-gray-600 mb-4">
                            Collaboration tools, including IP phones and video conferencing systems, designed to enhance
                            communication
                            and productivity in modern enterprises. Our solutions integrate seamlessly with your
                            existing
                            infrastructure.
                        </p>
                        <p class="text-gray-600">
                            From small teams to large organizations, we provide communication solutions that enable
                            efficient and
                            effective teamwork.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing",
});
useSeoMeta({
    title: 'Petabiz Nigeria Ltd | Our Products',
    ogTitle: 'Petabiz Nigeria Ltd | Our Products',
    titleTemplate: 'Petabiz Nigeria Ltd | Our Products',
    description: 'Global OEM Solutions for Enterprise Success.',
    ogDescription: 'Global OEM Solutions for Enterprise Success',

    twitterCard: 'summary_large_image',
    twitterTitle: 'Petabiz Nigeria Ltd',
    twitterDescription: 'Global OEM Solutions for Enterprise Success',

    ogImage: {
        url: 'https://petabiz-telco.com/Petabiz-Telco.png',
        width: 1200,
        height: 630,
        alt: 'Petabiz Nigeria Ltd - Trsuted Tech Partner'
    },
    twitterImage: 'https://petabiz-telco.com/Petabiz-Telco.png'
})
</script>
