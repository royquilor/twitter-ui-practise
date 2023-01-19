import * as Dialog from '@radix-ui/react-dialog';
import { HiOutlineXMark } from 'react-icons/hi2';
import { HiOutlinePencil } from 'react-icons/hi2';
import TweetForm from '../TweetForm';
import { Button } from '../Button/Button';

const DialogDemo = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<div className="w-full flex justify-center xl:justify-start mt-5">
				<Button size="large">
					<HiOutlinePencil className="w-6 h-6 xl:hidden" />
					<span className="hidden xl:flex">Tweet</span>
				</Button>
			</div>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay bg-slate-900/50 fixed inset-0 z-30" />
			<Dialog.Content className="DialogContent bg-white px-4 pt-4 pb-6 -translate-x-2/4 -translate-y-2/4 rounded-2xl shadow-xl fixed z-40 top-1/2 left-1/2 w-[90vw] max-w-lg max-h-[85vh] focus:outline-none">
				<Dialog.Close asChild className="mb-4">
					<button
						className="IconButton hover:bg-slate-200 rounded-full"
						aria-label="Close"
					>
						<HiOutlineXMark className="h-5 w-5" />
					</button>
				</Dialog.Close>
				<Dialog.Title className="DialogTitle sr-only">Tweet</Dialog.Title>
				<Dialog.Description className="DialogDescription sr-only">
					Make a Tweet
				</Dialog.Description>

				<TweetForm width="full" />

				{/* <Dialog.Close asChild>
          <button className="Button green">Save changes</button>
        </Dialog.Close> */}
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default DialogDemo;
